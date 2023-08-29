"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
const GoogleButton = () => {
  const buttonStyles = {
    height: '48px',
    padding: '0 24px',
    border: '2px solid #ccc',
    borderRadius: '9999px',
    transition: 'border-color 300ms, background-color 300ms',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  const imgStyles = {
    position: 'absolute',
    left: '0',
    width: '5px',
  };

  const textStyles = {
    display: 'block',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#374151',
    transition: 'color 300ms',
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-x-4',
  };

  return (
    <button style={buttonStyles} onClick={() => signIn('google', {callbackUrl : '/'} )}>
      <div style={containerStyles}>
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          style={imgStyles}
          alt="google logo"
        />
        <span style={textStyles}>Continue with Google</span>
      </div>
    </button>
  );
};

export default GoogleButton;
