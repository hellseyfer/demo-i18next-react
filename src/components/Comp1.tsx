import React from 'react';
import { useTranslation } from 'react-i18next';

const Comp1 = () => {
  const { t } = useTranslation(['nsWelcome', 'nsUserLogin']);
  return (
    <div>
      <p>{t('nsWelcome:description.part1')}</p>
      <p>{t('nsUserLogin:description.part2')}</p>
    </div>
  );
};

export default Comp1;
