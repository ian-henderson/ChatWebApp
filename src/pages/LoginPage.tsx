import { useCallback, FormEvent, useRef } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const onSubmit = useCallback(
        (event: FormEvent) => {
            event.preventDefault();

            if (!emailInputRef?.current || !passwordInputRef.current)
                return undefined;

            console.log({
                event,
                emailInput: emailInputRef.current.value,
                passwordInput: passwordInputRef.current.value,
            });
        },
        [emailInputRef],
    );

    return (
        <div>
            <h1>Login Page</h1>

            <form {...{ onSubmit }}>
                <div>
                    <label>
                        Email:&nbsp;
                        <input ref={emailInputRef} required type="email" />
                    </label>
                </div>

                <div>
                    <label>
                        Password:&nbsp;
                        <input
                            ref={passwordInputRef}
                            required
                            type="password"
                        />
                    </label>
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

            <p>
                Don&apos;t have an account?&nbsp;
                <Link to="/register">Register</Link>
            </p>
        </div>
    );
}
