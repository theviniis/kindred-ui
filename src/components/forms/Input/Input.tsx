import React from 'react';
import * as S from './Input.styles';
import * as T from './Input.types';

export const Input: React.FC<T.InputProps> = ({
  id = 'input-id-' + crypto.randomUUID(),
  name,
  type = 'text',
  label,
  placeholder = ' ',
  loading = false,
  disabled = false,
  variant = 'plain',
  skin = 'neutral',
  size = 'md',
  supportingText,
  startIcon,
  endIcon,
  value,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <S.InputWrapper
      variant={variant}
      skin={skin}
      size={size}
      loading={loading}
      label={label}
    >
      <S.Label htmlFor={id}>{label ?? placeholder}</S.Label>
      <S.Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
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
