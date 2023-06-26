'use client';

import { useEffect, useState } from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

import './footer.styles.scss';

export default function Footer({ time }) {

  const [currentTime, setCurrentTime] = useState(new Date(time));
  const footerData = [
    {
      id: 1,
      icon: <AiFillGithub />,
      path: 'https://github.com/Toba-dean'
    },
    {
      id: 2,
      icon: <AiOutlineTwitter />,
      path: 'https://twitter.com/code_DE4N'
    },
    {
      id: 3,
      icon: <AiFillLinkedin />,
      path: '/',
      last: 'last'
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date())
    }

    setInterval(updateTime, 1000);

    return () => clearInterval(updateTime);
  }, []);

  return (
    <footer>
      <p className="logo">
        find me at:
      </p>

      {
        footerData.map(({ id, icon, path, last }) => (
          <a
            href={path}
            key={id}
            target="_blank"
            rel="noreferrer"
            className={last && last}
          >
            {icon}
          </a>
        ))
      }

      <div className="left">
        {currentTime.toLocaleTimeString('en-US', {hour12: false})}
      </div>
    </footer>
  )
}
