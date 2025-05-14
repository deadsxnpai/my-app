import React from 'react';
import { MainLayout } from '@/shared/layouts';
import cls from './styles.module.less';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/shared/ui/input/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/ui/button-new/button';

import { HStack, VStack } from '@/shared/ui/Stack';

const HelpPage = () => {
	const formSchema = z.object({
		username: z.string().min(2).max(50),
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<MainLayout className={cls.main}>
			<VStack className={cls.container}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<VStack>
							<HStack gap='16'>
								<FormField
									control={form.control}
									name='username'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input
													placeholder='Username'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='username'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input
													type='password'
													placeholder='Password'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</HStack>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input
												placeholder='E-mail'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								className={cls.button}
								type='submit'>
								Submit
							</Button>
						</VStack>
					</form>
				</Form>
			</VStack>
		</MainLayout>
	);
};

export default HelpPage;
