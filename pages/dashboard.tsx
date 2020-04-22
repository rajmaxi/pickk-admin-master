import React from 'react';
import MainLayout from '@src/components/templates/MainLayout';

export default function Dashboard() {
  return (
    <MainLayout>
       Hello World
    </MainLayout>
  );
}

Dashboard.getInitialProps = () => {
  return {};
};

