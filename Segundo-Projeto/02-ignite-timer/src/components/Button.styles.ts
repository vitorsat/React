import styled, { css } from 'styled-components';

export type ButtonVariat = 'primary' | 'secondary' | 'success' | 'danger';

interface ButtonContainerProps {
	variant: ButtonVariat;
}

const buttonVariants = {
	primary: 'purple',
	secondary: 'orange',
	success: 'green',
	danger: 'red',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
	width: 100px;
	height: 40px;

	${(props) =>
		css`
			background-color: ${buttonVariants[props.variant]};
		`}
`;
