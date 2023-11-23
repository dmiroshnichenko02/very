'use client'

import { FC, useEffect, useState } from "react";
import HeaderLogotype from "../headerLogotype/HeaderLogotype";

import styles from './preloader.module.scss';

const Preloader: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.preloader} style={{ display: loading ? "flex" : "none" }}>
      <HeaderLogotype />
    </div>
  );
};

export default Preloader;
