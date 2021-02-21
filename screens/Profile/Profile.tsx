import * as React from "react";
import { ScrollView, View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Loader from "../../components/UIElements/Loader";
import PageContainer from "../../components/UIElements/PageContainer";
import SectionTitle from "../../components/UIElements/SectionTitle";
import Separator from "../../components/UIElements/Separator";

import styles from "./Profile.styles";

const Profile = () => {
  const { data: userData = {}, loading } = useSelector(
    (state: RootStateOrAny) => state.user
  );
  if (loading) return <Loader secondary />;

  return (
    <ScrollView>
      <PageContainer style={styles.container}>
        <ProfileCard user={userData} />
        
        <Separator />
        
        <SectionTitle>Profile Settings</SectionTitle>
      </PageContainer>
    </ScrollView>
  );
};

export default Profile;
