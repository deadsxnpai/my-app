import React from 'react'
import { useMemo, useEffect, useState } from 'react';
import { Preloader } from '@/shared';
import cls from './TrackList.module.less';
import { UserRoles } from '@/shared/constants/userRoles';
import useRedirect from '@/shared/api/useRedirect/useRedirect';
import { useGetTracks } from '../api/useEducation';
import TrackCard from './TrackCard';
import { DOMAIN, EndPoints } from '@/shared/constants/endpoints';

type TrecksListProps = {
  role: string;
  nameSpec: {
    namespec: string;
    department_name: string;
    nameprof: string;
    group: string;
    course: string;
    eform: string;
    elevel: string;
    recordbook:string;
  };
  currentUserId: string;
};

type Track = {
  track_id: string;
  name: string;
  data: {
    recruitmentYear: string;
  };
  is_visible: boolean;
  is_signed: boolean;
  is_active: boolean;
};

const TracksList: React.FC<TrecksListProps> = ({ role, nameSpec, currentUserId }) => {
  const [visibleYears, setVisibleYears] = useState<{ [key: string]: boolean }>({});
  const redirect = useRedirect();

  const handleNavigate = (track: Track) => {    
    redirect(`/tracks-details`)
  };

  const params = {
    filter:
      role === 'student' || role === 'student-rakus'
        ? {
            namespec: nameSpec.namespec,
            department: nameSpec.department_name,
            nameprof: nameSpec.nameprof,
            group: nameSpec.group,
            course: nameSpec.course,
            student_id: currentUserId,
            recordbook:nameSpec.recordbook,
            eform: nameSpec.eform,
            is_moderator: false,
            elevel: nameSpec.elevel,
          }
        : { is_moderator: true },
    pagination: { offset: 0, limit: 1000 },
    sort: [
      { column: 'is_visible', order: 'desc' },
      { column: 'created', order: 'desc' },
    ],
  };

  const { data, error, loading, refetch } = useGetTracks(params);
  console.log('data', data)

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data?.esTrackList?.items) {
      const latestYear = data.esTrackList.items
        .map((track: Track) => track.data.recruitmentYear)
        .sort((a:number, b:number) => b - a)[0];
      if (latestYear) {
        setVisibleYears({ [latestYear]: true });
      }
    }
  }, [data]);

  const groupedTracks = useMemo(() => {
    if (loading) return <Preloader />;
    if (error) return <div>..error..</div>;

    if (data?.esTrackList?.items) {
      const grouped:any = data.esTrackList.items.reduce((acc: { [key: string]: Track[] }, track: Track) => {
        const year = track.data.recruitmentYear;
        if (!acc[year]) acc[year] = [];
        acc[year].push(track);
        return acc;
      }, {});

      const sortedYears = Object.keys(grouped).sort((a:any, b:any) => b - a);

      return sortedYears.map((year) => (
        <section key={year} className={cls.yearContainer}>
          {(role !== UserRoles.STUDENT) && <header
            className={cls.yearHeader}
            onClick={() => setVisibleYears((prev) => ({ ...prev, [year]: !prev[year] }))}
          >
            Год набора: {year}
          </header> }
          {visibleYears[year] && (
            <div className={cls.tracksContainer}>
              {grouped[year].map((track:any) => (
                <TrackCard
                  key={track.track_id}
                  name={track.name}
                  type="Трек"
                  role={role}
                  is_visible={track.is_visible}
                  is_signed={track.is_signed}
                  id={track.track_id}
                  is_active={track.is_active}
                  handleNavigate={() => handleNavigate(track)}
                  nameSpec={nameSpec}
                />
              ))}
            </div>
          )}
        </section>
      ));
    }

    return null;
  }, [data, error, loading, role, nameSpec, visibleYears]);

  return <div className={cls.trecksListContainer}>{groupedTracks}</div>;
};

export default TracksList;
