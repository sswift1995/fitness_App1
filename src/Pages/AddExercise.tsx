import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddExercise = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [date, setDate] = useState('');

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setDate(date ? date.toISOString().slice(0, 10) : '');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Rest of the code...

    // You can use selectedDate as needed in your data object.
  };

  return (
    <div style={{ padding: '50px' }}>
      <h3>Add an exercise</h3>
      <form onSubmit={handleSubmit}>
        {/* ...Other form fields... */}

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                name="date"
                id="date"
                variant="standard"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '200px', height: '56px' }}
              />
            )}
          />
        </LocalizationProvider>

        {/* ...Other form fields... */}

      </form>
    </div>
  );
};

export default AddExercise;
