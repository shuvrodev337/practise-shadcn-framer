import useGetServices from "@/api/admin/services/service.hook";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const ServiceList = () => {
  const { data: todos, isLoading, isError } = useGetServices();
  // console.log(todos);
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }
  return (
    // https://ui.shadcn.com/docs/components/table
    <Container className="mt-10 border rounded ">
      <Table>
        <TableCaption>A list of total todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Serial</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>To Do</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>
              <TableCell className="font-medium">{todo.userId}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? "Completed" : "Pending"}</TableCell>
              <TableCell className="text-right">
                <Button variant={"destructive"} className="p-2">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length} Todos</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default ServiceList;
