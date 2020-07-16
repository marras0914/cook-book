import React from 'react';
import { StyledBackButton } from './styles';
import { useHistory } from 'react-router-dom';

const BackButton: React.SFC<IBackButtonProps> = ({ buttonText = 'Go back' }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return <StyledBackButton onClick={() => goBack()}>{buttonText}</StyledBackButton>;
};

interface IBackButtonProps {
  buttonText?: string;
}

export default BackButton;
