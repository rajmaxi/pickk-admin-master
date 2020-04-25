import React, {CSSProperties} from 'react';
import MainLayout from '@src/components/templates/MainLayout';
import {Layout, Typography} from 'antd';
import styled from 'styled-components';
import { TitleText } from '@src/components/organisms/Board/Filter/Header';
import Space from '@src/components/atoms/space';
import WrapperStatistic from 'antd/lib/statistic/Statistic';

const {Title, Text} = Typography;
const {Content, Footer} = Layout;

// const MainHeadStyle: CSSProperties = {
//   fontSize: '26px',
//   color: 'rgb(76, 80, 91)',
//   fontFamily: '"Roboto Slab", sans-serif',
//   float: 'left',
//   padding: '14px 7px 7px',
//   width: '100%'
// };

const ImgStyle: CSSProperties = {
  width: '100%'
};
const HeadSmallTitle: CSSProperties = {
  lineHeight: '14px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'rgb(143, 222, 203)',
  marginBottom: '5px'
};
const HeadTitle: CSSProperties = {
  fontFamily: 'Roboto Slab, sans-serif',
  color: 'rgb(76, 80, 91)',
  fontSize: '27px',
  lineHeight: '1.1em',
  fontWeight: 'bold',
  marginBottom: '10px'
};
const HeadSecondaryTitle: CSSProperties = {
  lineHeight: '1.1em',
  margin: '0px',
  padding: '0px',
  fontWeight: 'normal',
  fontSize: '18px',
  fontFamily: 'Roboto, sans-serif',
  color: 'rgb(76, 80, 91)'
};

const LineSpacer: CSSProperties ={
  borderRight: '2px dashed rgba(0,0,0,0.1)',
  margin: '10px 20px 10px 0'
};

const HeadButton : CSSProperties = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '150px',
  color: 'rgb(76, 80, 91)',
  textAlign: 'left',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  fontFamily: 'Roboto',
  padding: '15px',
  background: 'rgb(255, 255, 255)',
  borderRadius: '40px',
  marginTop: '20px'
};

export default function Dashboard() {
  return (
    <LayoutMain>
        <FormContent>
          <MainLayout>
            <TitleContent>So good to have you here.</TitleContent>
            <MainFormContentInner>
              <UserInfoSection1 style={LineSpacer}>
                <UserImage>
                  <img src="../images/create-tenant.png" alt="UserinfoImage" style={ImgStyle}></img>
                </UserImage>
                <USerData>
                  <p style={HeadSmallTitle}>Connected as </p>
                  <h3 style={HeadTitle}>Raj Maxi</h3>
                  <p style={HeadSmallTitle}>Tenant / Identifier</p>
                  <h3 style={HeadTitle}>MyAwesomeCompany</h3>
                  <h4 style={HeadSecondaryTitle}>myawesomecompany</h4>
                </USerData>
              </UserInfoSection1>
              <UserInfoSection1>
                <UserImage>
                  <img src="../images/products.png" alt="UserinfoImage" style={ImgStyle}></img>
                </UserImage>
                <USerData>
                  <h3 style={HeadTitle}>Create and Manage Products</h3>
                  <p style={HeadSecondaryTitle}>PIM as it should be. Create rich products and documents neatly stored in folders. Available in real time via the GraphQL API.</p>
                </USerData>
              </UserInfoSection1>
          </MainFormContentInner>
          <MainFormContentInner>
            <UserInfoSection2>
                <UserImageSection2>
                  <img src="../images/shapes.png" alt="UserinfoImage" style={ImgStyle}></img>
                </UserImageSection2>
                <USerDataSection2>
                  <h3 style={HeadTitle}>Products in any Shape</h3>
                  <p style={HeadSecondaryTitle}>Define custom shapes that fit your business. 
                  Define unique rich content document and folder shapes to enrich your product catalogue.</p>
                </USerDataSection2>
              </UserInfoSection2> 
              <UserInfoSection2>
                  <UserImageSection2>
                    <img src="../images/docs.png" alt="UserinfoImage" style={ImgStyle}></img>
                  </UserImageSection2>
                  <USerDataSection2>
                    <h3 style={HeadTitle}>Documentation & Tools</h3>
                    <p style={HeadSecondaryTitle}>Explore the PIM API and custom build the queries you need. 
                    Documentation of the API is available in the GraphQL playground schema explorer.
                    </p>
                  </USerDataSection2>
              </UserInfoSection2>
              <UserInfoSection2>
                  <UserImageSection2>
                    <img src="../images/grids.png" alt="UserinfoImage" style={ImgStyle}></img>
                  </UserImageSection2>
                  <USerDataSection2>
                    <h3 style={HeadTitle}>Grid Organizers</h3>
                    <p style={HeadSecondaryTitle}>Grids can be used to organize your content without 
                    the limitation of parents.</p>
                  </USerDataSection2>
               </UserInfoSection2>
            </MainFormContentInner>
            <MainFormContentInner>
            <UserInfoSection2>
                <UserImageSection2>
                  <img src="../images/invite.png" alt="UserinfoImage" style={ImgStyle}></img>
                </UserImageSection2>
                <USerDataSection2>
                  <h3 style={HeadTitle}>Creating is morefun with friends</h3>
                  <span style={HeadButton}>Invite a friend</span>
                </USerDataSection2>
              </UserInfoSection2> 
              <UserInfoSection2>
                  <UserImageSection2>
                    <img src="../images/webhooks.png" alt="UserinfoImage" style={ImgStyle}></img>
                  </UserImageSection2>
                  <USerDataSection2>
                    <h3 style={HeadTitle}>Orchestrate with Webhooks</h3>
                    <p style={HeadSecondaryTitle}>Webhooks fired when special events occur like new order or subscription renewal. 
                    Integrations done easy.
                    </p>
                  </USerDataSection2>
              </UserInfoSection2>
              <UserInfoSection2>
                  <UserImageSection2>
                    <img src="../images/analytics.png" alt="UserinfoImage" style={ImgStyle}></img>
                  </UserImageSection2>
                  <USerDataSection2>
                    <h3 style={HeadTitle}>Analytics & Predictions</h3>
                    <p style={HeadSecondaryTitle}>Gain insight with historic data and get predictions about the future. 
                    Make better decisions.</p>
                  </USerDataSection2>
               </UserInfoSection2>
            </MainFormContentInner>
          </MainLayout>
        </FormContent>
    </LayoutMain>
  );
}

Dashboard.getInitialProps = () => {
  return {};
};

const LayoutMain = styled(Layout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContent = styled(Content)`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const TitleContent = styled.div`
  font-size: 26px;
  font-family: "Roboto Slab", sans-serif;
  color: rgb(76, 80, 91);
  margin: 0px;
  text-align: left;
  padding-bottom: 25px;
  font-weight:700;
`;

const MainFormContentInner =styled.div`
  display: flex;
  border-top: 2px dashed rgba(0, 0, 0, 0.1);
`;
 
const UserInfoSection1 = styled.div`
  display: flex;
  width: 50%;
  min-height: 250px;
`;

const UserInfoSection2 = styled.div`
  width: 33%;
  min-height: 250px;
  margin: 20px;
  border-right: 2px dashed rgba(0, 0, 0, 0.1);
  padding-right: 20px;
`;

const UserImage = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImageSection2 = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const USerData = styled.div`
  width: 58%;
  margin: 70px 40px 0 40px;
  text-align: left;
`;

const USerDataSection2 = styled.div`
  text-align: left;
`;


