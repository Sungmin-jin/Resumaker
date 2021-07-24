import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThirdPartyAuthentication from './ThirdPartyAuthentication';
import { loginAction } from '../../modules/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../mock-data';
import AuthError from '../Authentication/AuthError/AuthError';
import { LOAD_IMAGE, SHOW_HEADER, HIDE_HEADER } from '../../modules/appLayout';
interface SignInForm {
	email: string;
	password: string;
}

const SignIn = (): JSX.Element => {
	const dispatch = useDispatch();
	// @ts-ignore
	const [form, setForm] = useState<SignInForm>({
		email: '',
		password: '',
	});

	useEffect(() => {
		dispatch({ type: LOAD_IMAGE, payload: userInfo });
		dispatch({ type: HIDE_HEADER });
		return () => {
			dispatch({ type: SHOW_HEADER });
		};
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		// @ts-ignore
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(loginAction(form));
	};
	const { email, password } = form;
	return (
		// Authentication-container
		<>
			<main className='authentication'>
				<article className='authentication-container'>
					<AuthError />
					<h4 className='authentication-title'>Sign in</h4>
					<form onSubmit={onSubmit} className='form-container'>
						<div className='authentication_input'>
							<input
								className='auth-email'
								type='email'
								name='email'
								value={email}
								onChange={onChange}
								placeholder='Email'
							/>
							<input
								className='auth-password'
								type='password'
								name='password'
								value={password}
								onChange={onChange}
								placeholder='Password'
							/>
						</div>
						<div className='authentication-input-misc'>
							<div className='authentication-remember-me'>
								<input type='checkbox' className='chk-box' />
								<label
									className='chk-box-label'
									htmlFor='chk-box'
								>
									Remember Me
								</label>
							</div>
							<div className='authentication-auth-btn-wrapper'>
								<button className='auth-btn' type='submit'>
									Sign in
								</button>
							</div>
						</div>
					</form>
					<div className='authentication-message'>
						For email or password?
						<Link to='/signup'>
							<span className='msg-link'>
								Create a new Account
							</span>
						</Link>
					</div>
					<div className='hr-element'> Or </div>
					<ThirdPartyAuthentication />
				</article>

				<article className='form-picture-container'>
					<img
						className='form-picture'
						src='https://images.unsplash.com/photo-1585939268339-886c9643ee98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
					/>
				</article>
			</main>
		</>
	);
};

export default SignIn;
