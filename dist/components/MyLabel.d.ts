/// <reference types="react" />
import './myLabel.css';
export interface Props {
    /**
     * The message that will be shown on the label
     */
    label: string;
    /**
     * The size of the label
     * */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the label
     */
    allCaps?: boolean;
    /**
    * Color of the label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
    * Background Color of the label
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: Props) => JSX.Element;
