import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dispatch, FC, SetStateAction } from 'react';

type BasicDatePickerProps = {
  selectedDate: Date | null;
  onChange: Dispatch<SetStateAction<Date | null>>
}

export const TableDateSelect: FC<BasicDatePickerProps> = (props) => {
  const { selectedDate, onChange } = props;

  const handleDateChange = (newDate: Date | null) => {
    onChange(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{ padding: 0 }}>
        <DatePicker
          label="Basic date picker"
          value={selectedDate}
          onChange={handleDateChange}
          sx={{ width: '100%' }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
