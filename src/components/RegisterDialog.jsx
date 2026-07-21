import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import { brand } from "../theme.js";
import { COUNTRIES, countryByIso, flagOf } from "../data/countryCodes.js";
import { registerUser } from "../api/userApi.js";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .matches(/^[A-Za-z][A-Za-z\s.'-]*$/, "Name can only contain letters")
    .required("Name is required"),
  country: Yup.string().required(),
  phone: Yup.string()
    .required("Phone number is required")
    .when("country", {
      is: "IN",
      then: (schema) =>
        schema.matches(
          /^[6-9]\d{9}$/,
          "Enter a valid 10-digit Indian mobile number",
        ),
      otherwise: (schema) =>
        schema.matches(/^\d{6,14}$/, "Enter a valid phone number"),
    }),
  dob: Yup.date()
    .typeError("Enter a valid date of birth")
    .max(new Date(), "Date of birth must be in the past")
    .required("Date of birth is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Select a gender")
    .required("Gender is required"),
});

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    bgcolor: "rgba(0,128,255,0.02)",
    "& fieldset": { borderColor: "rgba(11,27,51,0.15)" },
    "&:hover fieldset": { borderColor: "rgba(0,128,255,0.4)" },
    "&.Mui-focused fieldset": { borderColor: "#0080FF" },
  },
};

export default function RegisterDialog({ open, onClose }) {
  const [result, setResult] = useState(null); // { data } on success
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      country: "IN",
      phone: "",
      dob: "",
      gender: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setApiError("");
      const name = values.firstName.trim();
      const dialDigits = (countryByIso(values.country)?.dial ?? "").replace(
        "+",
        "",
      );
      const [year, month, day] = values.dob.split("-");
      const payload = {
        email: `${dialDigits}${values.phone}@thephonemail.com`,
        // email: `${dialDigits}${values.phone}`,
        firstName: name,
        phoneNumber: values.phone,
        dateOfBirth: `${year}/${Number(month)}/${Number(day)}`,
        gender: values.gender.charAt(0).toUpperCase() + values.gender.slice(1),
        profileImage: "null",
        password: `PhoneMail${name.replace(/\s+/g, '')}@123`,
      };
      try {
        const response = await registerUser(payload);
        setResult({ submitted: payload, response });
      } catch (err) {
        setApiError(err.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleClose = () => {
    onClose();
    // reset after the closing transition so the form doesn't flash
    setTimeout(() => {
      formik.resetForm();
      setResult(null);
      setApiError("");
    }, 300);
  };

  const fieldError = (name) =>
    formik.touched[name] && Boolean(formik.errors[name]);
  const helper = (name) => formik.touched[name] && formik.errors[name];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 5,
            border: "1px solid rgba(0,128,255,0.2)",
            bgcolor: "#fff",
            boxShadow:
              "0 24px 80px rgba(11,27,51,0.2), 0 0 60px rgba(0,128,255,0.08)",
          },
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        aria-label="Close registration dialog"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          color: "text.secondary",
          zIndex: 1,
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
        {result ? (
          <Stack
            spacing={2}
            sx={{ alignItems: "center", textAlign: "center", py: 2 }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(5,150,105,0.1)",
                border: "1px solid rgba(5,150,105,0.35)",
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 36, color: "#059669" }} />
            </Box>
            <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
              Registration successful!
            </Typography>
            {result.response &&
              (result.response.message || result.response.msg) && (
                <Typography
                  sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                >
                  {result.response.message || result.response.msg}
                </Typography>
              )}
            <Stack
              spacing={1}
              sx={{
                width: "100%",
                p: 2.5,
                borderRadius: 3,
                border: "1px solid rgba(0,128,255,0.15)",
                bgcolor: "rgba(0,128,255,0.03)",
                textAlign: "left",
              }}
            >
              {[
                ["Name", result.submitted.firstName],
                ["Email", result.submitted.email],
                ["Phone", result.submitted.phoneNumber],
                ["Date of birth", result.submitted.dateOfBirth],
                ["Gender", result.submitted.gender],
              ].map(([label, value]) => (
                <Stack
                  key={label}
                  direction="row"
                  sx={{ justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "0.85rem", color: "text.secondary" }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textTransform: label === "Gender" ? "capitalize" : "none",
                    }}
                  >
                    {value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ mt: 1, px: 4, background: brand.gradient }}
            >
              Done
            </Button>
          </Stack>
        ) : (
          <Stack
            component="form"
            onSubmit={formik.handleSubmit}
            spacing={2.25}
            noValidate
          >
            <Stack spacing={1}>
              <Typography variant="h4" sx={{ fontSize: "1.6rem" }}>
                Register for{" "}
                <Box component="span" sx={brand.gradientText}>
                  PhoneMail
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
               Be among the first to claim your PhoneMail ID at launch.
              </Typography>
            </Stack>

            {apiError && (
              <Alert severity="error" sx={{ borderRadius: 3 }}>
                {apiError}
              </Alert>
            )}

            <TextField
              name="firstName"
              label="Name"
              placeholder="Ramesh Kumar"
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={fieldError("firstName")}
              helperText={helper("firstName")}
              sx={fieldSx}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon
                        sx={{ fontSize: 20, color: "text.secondary" }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              name="phone"
              label="Phone number"
              placeholder="9876543210"
              fullWidth
              value={formik.values.phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "");
                formik.setFieldValue("phone", digits);
              }}
              onBlur={formik.handleBlur}
              error={fieldError("phone")}
              helperText={
                helper("phone") || "This number becomes your email ID"
              }
              sx={fieldSx}
              slotProps={{
                htmlInput: {
                  maxLength: formik.values.country === "IN" ? 10 : 14,
                  inputMode: "numeric",
                },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Select
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        variant="standard"
                        disableUnderline
                        renderValue={(iso) => (
                          <Box
                            component="span"
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.75,
                            }}
                          >
                            <span>{flagOf(iso)}</span>
                            <span>{countryByIso(iso)?.dial}</span>
                          </Box>
                        )}
                        sx={{
                          fontSize: "0.95rem",
                          color: "text.primary",
                          "& .MuiSelect-select": {
                            py: 0,
                            pr: "20px !important",
                          },
                        }}
                        MenuProps={{
                          slotProps: {
                            paper: { sx: { borderRadius: 2, maxHeight: 320 } },
                          },
                        }}
                      >
                        {COUNTRIES.map((c) => (
                          <MenuItem
                            key={c.iso}
                            value={c.iso}
                            sx={{ fontSize: "0.9rem" }}
                          >
                            <Box component="span" sx={{ mr: 1 }}>
                              {flagOf(c.iso)}
                            </Box>
                            {c.name}
                            <Box
                              component="span"
                              sx={{
                                ml: "auto",
                                pl: 2,
                                color: "text.secondary",
                              }}
                            >
                              {c.dial}
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2.25}>
              <TextField
                name="dob"
                label="Date of birth"
                type="date"
                fullWidth
                value={formik.values.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={fieldError("dob")}
                helperText={helper("dob")}
                sx={fieldSx}
                slotProps={{
                  inputLabel: { shrink: true },
                  htmlInput: { max: new Date().toISOString().split("T")[0] },
                }}
              />
              <TextField
                name="gender"
                label="Gender"
                select
                fullWidth
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={fieldError("gender")}
                helperText={helper("gender")}
                sx={fieldSx}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={formik.isSubmitting}
              sx={{
                py: 1.4,
                fontSize: "1rem",
                background: brand.gradient,
                boxShadow: "0 12px 32px rgba(0,128,255,0.3)",
                "&.Mui-disabled": {
                  background: "rgba(0,128,255,0.3)",
                  color: "#fff",
                },
              }}
            >
              {formik.isSubmitting ? (
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center" }}
                >
                  <CircularProgress size={18} sx={{ color: "#fff" }} />
                  <span>Registering…</span>
                </Stack>
              ) : (
                "Register"
              )}
            </Button>
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
}
