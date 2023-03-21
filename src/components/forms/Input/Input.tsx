import React from 'react';
import * as T from './Input.types';
import * as S from './Input.styles';

export const Input: React.FC<T.InputProps> = ({
  id = crypto.randomUUID() + '-input',
  name = '',
  type = 'text',
  label = '',
  placeholder = ' ',
  value = '',
  skin = 'neutral',
  supportingText,
  size = 'md',
  startIcon,
  endIcon,
  loading = false,
  disabled = false,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <S.Wrapper skin={skin} startIcon={startIcon} endIcon={endIcon} size={size}>
      <S.InputContainer className="input-container">
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input
          aria-invalid="false"
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          label={label}
          placeholder={placeholder}
          aria-describedby={id + 'supportingText'}
          {...props}
        />
        <S.Fieldset aria-hidden="true">
          <legend>
            <span>{label}</span>
          </legend>
        </S.Fieldset>
        {(startIcon || endIcon) && (
          <S.IconsWrapper>
            <span>{startIcon && startIcon}</span>
            <span>{endIcon && endIcon}</span>
          </S.IconsWrapper>
        )}
      </S.InputContainer>
      {supportingText && (
        <S.SupportingText id={id + 'supportingText'}>
          {supportingText}
        </S.SupportingText>
      )}
    </S.Wrapper>
  );
};
