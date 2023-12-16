import { useRef, FormEvent, useCallback } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const onSubmit = useCallback(
        (event: FormEvent) => {
            event.preventDefault();

            if (!emailInputRef?.current || !passwordInputRef?.current)
                return undefined;

            console.log({
                event,
                emailInput: emailInputRef.current.value,
                passwordInput: passwordInputRef.current.value,
            });
        },
        [emailInputRef, passwordInputRef],
    );

    return (
        <div>
            <h1>Register Page</h1>

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
                    <button type="submit">Register</button>
                </div>
            </form>

            <p>
                Already have an account?&nbsp;
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
}
