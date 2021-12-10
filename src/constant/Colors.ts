export class Colors {
    static BASIC_COLOR: IColors = {key:"color-basic-100", value: "#FFF"};
    static SUCCESS: IColors = {key:"color-success-500", value: "#00E096"};
    static BACKGROUND: IColors = {key: "background-basic-color-1", value: "#222B45"};
    static DISABLED: IColors = {key: "color-basic-disabled", value: "rgba(143, 155, 179, 0.24)"};
    static PRIMARY: IColors = {key: "color-primary-500", value: "#3366FF"};
    static INFO: IColors = {key: "color-info-500", value: "#0095FF"};
    static WARNING: IColors = {key: "color-warning-500", value: "#FFAA00"};
    static DANGER: IColors = {key: "color-danger-500", value: "#FF3D71"};
    static WHITE: IColors = {value: "#000"};
}

export interface IColors{
    key?: string;
    value: string;
}