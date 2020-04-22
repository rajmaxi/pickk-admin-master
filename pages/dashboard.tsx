import React, {CSSProperties} from 'react';
import MainLayout from '@src/components/templates/MainLayout';
import {Layout, Typography} from 'antd';
import styled from 'styled-components';
import { TitleText } from '@src/components/organisms/Board/Filter/Header';

const {Title, Text} = Typography;
const {Content, Footer} = Layout;

const MainHeadStyle: CSSProperties = {
  fontSize: '26px',
  color: 'rgb(76, 80, 91)',
  fontFamily: '"Roboto Slab", sans-serif',
  float: 'left',
  padding: '14px 7px 21px',
  width: '100%'
};

const LineSpacer: CSSProperties = {
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1fr 50px 1fr',
  borderTop: '2px dashed rgba(0, 0, 0, 0.1)'
};




export default function Dashboard() {
  return (
    <MainFormLayout>
        <MainFormContent>
          <MainLayout>
             <Title style={MainHeadStyle}>We really like to have you here.</Title>
             <TitleText style={LineSpacer}></TitleText>
          </MainLayout>
        </MainFormContent>
    </MainFormLayout>
  );
}

Dashboard.getInitialProps = () => {
  return {};
};

const MainFormLayout = styled(Layout)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: red;
  padding: 5px;
`;

const MainFormContent = styled(Content)`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;


