import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/shared/ui/input/input';
import { Button } from '@/shared/ui/button-new/button';
import { VStack } from '@/shared/ui/Stack';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/shared/ui/form/form';
import cls from './style.module.less';
import { Card } from '@/shared';

const schema = z.object({
	fullName: z.string().min(2, 'Введите ФИО'),
	email: z.string().email('Неверный email'),
});

type FormValues = z.infer<typeof schema>;

export const ProfileForm = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			fullName: '',
			email: '',
		},
	});

	const onSubmit = (values: FormValues) => {
		console.log('Данные формы:', values);
	};

	return (
		<Card className={cls.card}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<VStack gap='16'>
						<FormField
							name='email'
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel className={cls.label}>
										Введите e-mail для отправки результатов
									</FormLabel>
									<FormControl>
										<Input
											className={cls.input}
											placeholder='U61413@tsutmb.ru'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type='submit'>Сохранить</Button>
					</VStack>
				</form>
			</Form>
		</Card>
	);
};
