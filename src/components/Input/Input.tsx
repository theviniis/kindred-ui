import React from 'react';
import * as S from './Input.styles';
import * as T from './Input.types';

export const Input: React.FC<T.InputProps> = ({
  id = 'input-id-' + crypto.randomUUID(),
  name,
  type = 'text',
  label,
  placeholder,
  loading = false,
  disabled = false,
  variant = 'plain',
  skin = 'neutral',
  inputSize = 'md',
  error = false,
  supportingText,
  startIcon,
  endIcon,
  value,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <S.InputWrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        {...props}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        variant={variant}
        skin={skin}
        inputSize={inputSize}
        loading={loading}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {supportingText && <S.SupportingText>{supportingText}</S.SupportingText>}

      {(startIcon || endIcon) && (
        <S.IconsWrapper>
          {startIcon && <span id="input-start-icon">{startIcon}</span>}
          {endIcon && <span id="input-end-icon">{endIcon}</span>}
        </S.IconsWrapper>
      )}
    </S.InputWrapper>
  );
};
