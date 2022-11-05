import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './huaban.module.css';

export default function Huaban() {
  const history = useHistory();

  const data = {};

  return (
    <div className={`flex-row ${styles['page']}`}>
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62fc655e5a7e3f03104db559/62fc6631974f910012ec7254/16607084161672529189.png"
        className={`${styles['image']}`}
      />
      <span className={`${styles['text']}`}>客户成功系统</span>
    </div>
  );
}