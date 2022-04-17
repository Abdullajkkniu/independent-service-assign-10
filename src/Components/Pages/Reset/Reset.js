import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Reset = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (sending) {
        return <p>Sending...</p>;
      }
      const handleEmailChange=(e)=>{
          setEmail(e.target.value);
      }
    return (
        <div>
            <form>
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='Your email' />
                <button onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email');
        }}>Reset</button>
            </form>
        </div>
    );
};

export default Reset;