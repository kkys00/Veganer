import React from "react";
import { StyleSheet, Modal, View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function UploadModeModal({
  visible, 
  onClose, 
  onLaunchCamera, 
  onLaunchImageLibrary,
}) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose} >
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: "#eee"}}
            onPress={() => {
              onLaunchCamera();
              onClose();
            }} >
            <Icon name="camera-alt" color="#757575" size={24} style={styles.icon} />
            <Text style={styles.actionText}>메뉴판 촬영</Text>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            android_ripple={{color: "#eee"}}
            onPress={() => {
              onLaunchImageLibrary();
              onClose();
            }} >
            <Icon name="photo" color="#757575" size={24} style={styles.icon} />
            <Text style={styles.actionText}>사진 선택</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteBox: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 26,
  },
});

export default UploadModeModal;