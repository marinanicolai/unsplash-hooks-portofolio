import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const form = useForm();

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        navigate(`/search/${values?.search}`);
      })}
    >
      <Group position="right" ml={50}>
        <TextInput
          width={300}
          aria-label="Search"
          placeholder="Search high-resolution images"
          {...form.getInputProps("search")}
        />
        <Button type="submit">Search</Button>
      </Group>
    </form>
  );
}

export default SearchForm;
