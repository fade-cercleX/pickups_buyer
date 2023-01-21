import { colors } from "./color";

export const style = {
  primary: "#6F2DA8",
  header: {
    backgroundColor: colors.primary,
  },
  inputText: {
    backgroundColor: colors.white,
    borderColor: "#e7e7e7",
    height: 58,
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    borderColor: colors.borderColor,
    borderWidth: 1,
    fontSize: 16,
    fontFamily: "circular",
  },

  inputArea: {
    backgroundColor: colors.white,
    borderColor: "#999",
    height: 75,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginVertical: 12,
    borderColor: colors.borderColor,
    borderWidth: 2,
    fontSize: 16,
  },
  smallText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "circular",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "circular",
    color: "#3a363e",
  },
  grayText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#808080",
    fontFamily: "circular",
  },
  semiBold: {
    fontWeight: "500",
    fontSize: 18,
    fontFamily: "circular",
  },
  mb_2:{
    marginBottom:20
  },

  bold: {
    fontWeight: "600",
    fontSize: 22,
    fontFamily: "circular",
  },
  safeAreaView: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundPrimary,
  },

  box: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 16,
    shadowColor: "rgba(230,230,230,0.025)",
    shadowOpacity: 1.9,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginHorizontal: 7,
    marginVertical: 4,
    borderRadius: 5,
  },
  logo: {
    borderRadius: 50,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  ml_1: {
    marginLeft: 10,
  },
  column: {
    flexDirection: "column",
    alignItems: "start",
  },

  form: {
    width: "100%",
    marginVertical: 10,

    flex: 2,
  },
  footer: {
    bottom: 0,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  s_b: {
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  mh_1: {
    marginRight: 10,
    marginLeft: 10,
  },
  mt_1: {
    marginTop: 10,
  },
  mt_2: {
    marginTop: 20,
  },
  mb_1: {
    marginBottom: 12,
  },

  mr_1: {
    marginRight: 10,
  },
  mv_1: {
    marginBottom: 5,
    marginTop: 5,
  },
  mv_2: {
    marginBottom: 10,
    marginTop: 10,
  },

  ph_5: {
    paddingHorizontal: 50,
  },

  pv_2: {
    paddingVertical: 30,
  },
  ph_1: {
    paddingHorizontal: 10,
  },
  pv_1: {
    paddingVertical: 10,
  },

  cartIcon: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  notificationImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  border: {
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  screen: {
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  start: {
    alignItems: "flex-start",
  },
  center: {
    alignItems: "center",

    ontent: "center",
  },
};
