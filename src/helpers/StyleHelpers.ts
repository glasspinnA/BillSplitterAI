import { FontSize } from "../enums/Text/FontSize";
import { FontStatus } from "../enums/Text/FontStatus";
import { Colors } from "../styles/Colors";

const GetFontSize = (size: FontSize | undefined): string => {
  switch (size) {
    case FontSize.H1:
      return "60px";
    case FontSize.H2:
      return "50px";
    case FontSize.H3:
      return "40px";
    case FontSize.H4:
      return "30px";
    case FontSize.H5:
      return "25px";
    case FontSize.H6:
      return "20px";
    case FontSize.P1:
    case FontSize.S1:
      return "20px";
    case FontSize.P2:
    case FontSize.S2:
      return "16px";
    default:
      return "15px";
  }
};
const GetFontWeight = (size: FontSize | undefined): string => {
  switch (size) {
    case FontSize.H1:
    case FontSize.H2:
    case FontSize.H3:
    case FontSize.H4:
    case FontSize.H5:
    case FontSize.H6:
      return "600";
    case FontSize.S1:
      return "500";
    default:
      return "normal";
  }
};
const GetFontStatus = (status: FontStatus | undefined) => {
  switch (status) {
    case FontStatus.PRIMARY:
      return Colors.Basics.PRIMARY;
    case FontStatus.SUCCESS:
      return Colors.Basics.SUCCESS;
    case FontStatus.INFO:
      return Colors.Basics.INFO;
    case FontStatus.WARNING:
      return Colors.Basics.WARNING;
    case FontStatus.DANGER:
      return Colors.Basics.DANGER;
    default:
      return Colors.Basics.DEFAULT;
  }
};

export { GetFontSize, GetFontStatus, GetFontWeight };
