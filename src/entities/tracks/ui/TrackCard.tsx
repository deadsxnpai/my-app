import React from 'react';
import { IconCircleCheck, } from '@tabler/icons'
import clsx from 'clsx'
import './TrackCard.less'
import TooltipTgu from '@/shared/ui/TooltipTgu/TooltipTgu';
import { TooltipPlacementVariant } from '@/shared/ui/TooltipTgu/types';

const TrackCard = ({
  type,
  id,
  is_signed,
  is_visible,
  handleNavigate,
  name,
  styles,
  active = false,
  role = false,
  nameSpec,
  is_active,
}: any) => {

  const handleRedirect = (e: any) => {
    if (role === 'student' || role === 'student-rakus') {
      handleNavigate(e)
        .then(res => console.log('success'))
        .catch(e => console.log(e))
    } else {
      handleNavigate(e)
    }
  }


  return (
    <>
      <div
        className={ clsx({
          'card-discipline-pathway': true,
          'card-discipline-pathway_active': is_signed,
          'unvisible-card': !is_visible,
        }) }
        style={ styles }
        onClick={ e => handleRedirect(e) }
      >
        <div className="card-discipline-pathway__title-wrapper">
          <div
            className="card-discipline-pathway__name"
            style={ { width: '100%', } }
          >
            <div
              style={ {
                display: 'flex',
                justifyContent: 'space-between',
              } }
            >
              { name }
              <div className="moderStatusesWrapElective">
                { is_signed ? (
                  <TooltipTgu children={
                    <IconCircleCheck
                      style={ {
                        color: '#7671DD',
                        fontSize: '1.5rem',
                        marginLeft: '.5rem',
                      } }
                    />
                  }
                  placement={ TooltipPlacementVariant.bottom }
                  title="Вы записаны" />

                ) : (
                  false
                ) }
            
              </div>
            </div>
          </div>
        </div>

        <div className="card-discipline-pathway__type">
          { type }
        </div>
      </div>
    </>
  )
}

export default TrackCard
