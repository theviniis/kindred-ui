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
  required = false,
  hasError,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <S.Wrapper
      skin={hasError ? 'red' : skin}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
    >
      <S.InputContainer className="input-container">
        <S.Label htmlFor={id}>
          {label}
          {required && ' *'}
        </S.Label>
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
          {...props}
        />

        <S.Fieldset aria-hidden="true" label={label}>
          <legend>
            <span>
              {label}
              {required && ' *'}
            </span>
          </legend>
        </S.Fieldset>
        {(startIcon || endIcon || hasError) && (
          <S.IconsWrapper>
            <span>{startIcon && startIcon}</span>
            <span>{(hasError && <S.ErrorIcon />) || (endIcon && endIcon)}</span>
          </S.IconsWrapper>
        )}
      </S.InputContainer>
      {supportingText && (
        <S.SupportingText hasError={hasError}>
          {supportingText}
        </S.SupportingText>
      )}
    </S.Wrapper>
  );
};
