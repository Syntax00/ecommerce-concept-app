import * as React from "react";
import { I18nManager, ScrollView, View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import { Restart } from "fiction-expo-restart";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Loader from "../../components/UIElements/Loader";
import PageContainer from "../../components/UIElements/PageContainer";
import SectionTitle from "../../components/UIElements/SectionTitle";
import Separator from "../../components/UIElements/Separator";
import ToggleSwitch from "../../components/UIElements/ToggleSwitch/ToggleSwitch";

import styles from "./Profile.styles";

const toggleRTLLayout = () => {
  I18nManager.forceRTL(!I18nManager.isRTL);
  Restart();
};

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

        <View style={styles.togglersContainer}>
          <ToggleSwitch
            label="Toggle RTL"
            onChange={toggleRTLLayout}
            initialValue={I18nManager.isRTL}
          />

          <ToggleSwitch label="Enable notifications" />

          <ToggleSwitch label="Enable location" />

          <ToggleSwitch label="Addresses" />
        </View>
      </PageContainer>
    </ScrollView>
  );
};

export default Profile;
