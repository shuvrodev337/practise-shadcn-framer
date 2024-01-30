import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [todo, setTodo] = useState("");
  const queryClient = useQueryClient(); // for cache invalidating purpose, we need this hook
  // this is an example mutation request by tanstack // tanstack e create/pupdate/delete k useMutation diye handle kora hoy
  // New Services er poriborte new todo for example, there is no service/todo server , this is a demo template.
  // useMutation returns mutateAsync/mutate, isError, isSuccess, etc.
  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (newTodo) => {
      // return axios.post('/todos', newTodo)
      return await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    // for cache invalidating, we can catch various events by 'on..'
    // such as onSuccess, takes an callback, jekhane amra jei query key er cache ta invalidate korbo seta diye deya jay.
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // This is a demo newTodo, imagine it came from form.
    const newTodo = {
      userId: 1222,
      id: 1222,
      title: "delectus aut autem",
      completed: false,
    };
    await mutateAsync(newTodo); // shudhu 'mutate' use korle async/await use kora lagbena.
  };

  // Cache in Behaviour of Tanstack Query, Cache Time, Stale Time
  //1.Kono Component st time Mount e Tanstack jokhon kono data fetch kore ane, tokhon se oi data k ene cache kore rakhe.example: todoIst ta get korar por cache kore rakhe.

  // 2. Next time jokhon abar oi component mount hoy, (todoList/ serviceList page e abar asa hole), tanstack cache theke data ta serve kore.
  // component unmount hole oi component er query ('todos') er status 'inactive' hoye jay.
  // component mount hole oi component er query ('todos') er status 'fetching' and then data cache korar pore status 'stale' hoye jay.

  //3. Proti bar cach theke data dekhanor somoy behind the scene e arekta fetch (get) request send kore, and jodi todoList ta te kono change(mutation) hoy ,se tokhon on the fly updated todolist ta ene dekhabe and new data cach kore rakhbe.

  // 4.As a developer our job is to invalidate(refectch) the cache of the related query (key ex: 'todos')

  // 5.component mount/unmount howar somoy tanstack akta arefetch chalay dey. for this reason, differnt page thekee data update kore  , data get kora page e asle updated data e pawa jay. but jodi ak e page e data update kora hoy and updated data real time e dekhte hole, MUST cache invalidate korte hobe.

  // 6. Cache Time->By default kotokkhon data cache kore rakhbe ? 1000* 60 * 5   ms/5 min tanstack data cache in kore rakhe, so that after initial fetch, 5 min porjonto route change kore abar oi page e asle loading state na dekhiye, cache thekei data serve kore,Cache kotokkhon dhore rakhbe, seta 'gcTime' diye maintain kora hoy , at original get query.

  //7 . stale time-? jei data query hoyeche seta clean na, cache theke dekhacche, not latest, eta bujhate 'stale' status dekhay.jodi behind the scene e data fetch ta akta specific time er jonno off rakhte chai and tanstack k bole dite chai jei data ta ache setar status 'fresh' for certain perion of time? seta 'staleTime' diye maintain kora hoy , at original get query.
  // 'fresh ' status e thaka kalin se kono bts get request pathabe na. jesob data frequently updated hoyna, sesob khetre bts request er dorkar nai.and sekhane staleTime diye backend e request pathanor rate ta maintain kora jay,
  // staleTime Infinity kore dile infinity time er jonno status 'fresh' thakbe, kokhono bts fetch korbe na.
  // By default staleTime thake 0, every time load howar sathe sathei bts fetch chole.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <Button variant={"default"}>Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
