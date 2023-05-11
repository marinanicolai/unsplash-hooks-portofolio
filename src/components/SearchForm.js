import { useState } from "react";
import { Input, Checkbox, Button, Group, Box, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
import { SearchIcon } from "@primer/octicons-react";
import PaperWrapper from "./../wrappers/Paper";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const form = useForm();

  const handleSubmit = (values) => {
    navigate(`/search/${values?.search}`);
    setValue("");
    console.log("Form reset"); // Debug statement
    console.log("Input value:"); // Debug statement
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Group position="right" ml={50}>
        <PaperWrapper>
          <Input
            icon={<SearchIcon size={16} />}
            value={value}
            width={300}
            aria-label="Search"
            placeholder="Search high-resolution images"
            {...form.getInputProps("search")}
          />
        </PaperWrapper>
      </Group>
    </form>
  );
}

export default SearchForm;
