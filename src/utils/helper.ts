import { CSSProperties } from 'react';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ControlButtonProps, ControlProps } from "./interfaces"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getControls = (controlsText: ControlProps[], onClick: any, moreClasses?: CSSProperties): ControlButtonProps[] =>
	controlsText.map(({ image, text }) => ({
		image,
		onClick: () => onClick(text),
		moreClasses
	}))