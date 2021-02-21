import * as React from "react";
import { I18nManager, Linking, Platform, ScrollView, View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import { Restart } from "fiction-expo-restart";
import * as Permissions from "expo-permissions";
import * as IntentLauncher from "expo-intent-launcher";

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
const openSetting = (androidIntent: any) => {
  if (Platform.OS == "ios") {
    Linking.openURL("app-settings:");
  } else {
    IntentLauncher.startActivityAsync(androidIntent);
  }
};

const Profile = () => {
  const [notificationsPermission] = Permissions.usePermissions(
    Permissions.NOTIFICATIONS
  );
  const [locationPermission] = Permissions.usePermissions(Permissions.LOCATION);
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
          <ToggleSwitch
            label="Enable notifications"
            initialValue={notificationsPermission?.status === "granted"}
            onChange={() =>
              openSetting(IntentLauncher.ACTION_NOTIFICATION_SETTINGS)
            }
          />

          <ToggleSwitch
            label="Enable location"
            initialValue={locationPermission?.status === "granted"}
            onChange={() =>
              openSetting(IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS)
            }
          />

          <ToggleSwitch label="Addresses" />
        </View>
      </PageContainer>
    </ScrollView>
  );
};

export default Profile;
