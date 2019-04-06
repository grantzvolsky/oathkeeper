// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
)

// CreateRuleInternalServerError CreateRuleInternalServerError CreateRuleInternalServerError handles this case with default header values.
//
// The standard error format
// swagger:model CreateRuleInternalServerError
type CreateRuleInternalServerError struct {

	// payload
	Payload *CreateRuleInternalServerErrorBody `json:"Payload,omitempty"`
}

// Validate validates this create rule internal server error
func (m *CreateRuleInternalServerError) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validatePayload(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *CreateRuleInternalServerError) validatePayload(formats strfmt.Registry) error {

	if swag.IsZero(m.Payload) { // not required
		return nil
	}

	if m.Payload != nil {
		if err := m.Payload.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("Payload")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *CreateRuleInternalServerError) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *CreateRuleInternalServerError) UnmarshalBinary(b []byte) error {
	var res CreateRuleInternalServerError
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
