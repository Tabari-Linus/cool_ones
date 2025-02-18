import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/Store/product";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
    const [success, message] = createProduct(newProduct);
    console.log("success", success);
    console.log("message", message);
  }
  return (
    <Container maxW={"container.sm"}  >
      <VStack gap={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box padding={6} w="full" shadow="md" borderRadius="lg" bg={useColorModeValue('gray.100', "gray.900")}>
            <VStack gap={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

<Input
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            </VStack>
        </Box>
        <Button colorPalette='blue' onClick={handleAddProduct} w={'full'}>Add Product</Button>
      </VStack>
    </Container>
  );
};

export default CreatePage;
