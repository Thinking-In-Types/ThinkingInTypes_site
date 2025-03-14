# Collections And Generics

> This placeholder text was generated by ChatGPT 4.5.
> It will be significantly rewritten as the book is developed.
> In the meantime you can add comments to either <https://bsky.app/bruceeckel> or [Github Issues](https://github.com/Thinking-In-Types/ThinkingInTypes_Book/issues).

## Annotating Lists, Tuples, Sets, Dictionaries

Python provides built-in collection types such as lists, tuples, sets, and dictionaries. Annotating these clearly specifies their expected contents:

### Lists

```python
from typing import List

scores: List[int] = [95, 85, 75]
```

### Tuples

```python
from typing import Tuple

coordinates: Tuple[float, float] = (23.5, 45.8)
```

### Sets

```python
from typing import Set

unique_ids: Set[str] = {"abc", "xyz", "123"}
```

### Dictionaries

```python
from typing import Dict

user_data: Dict[str, int] = {"Alice": 30, "Bob": 25}
```

These annotations enhance readability and help catch type-related errors early.

## Understanding Generics (`list[int]`, `dict[str, float]`)

Starting from Python 3.9, built-in collection types support direct annotations without importing from `typing`:

```python
scores: list[int] = [95, 85, 75]
user_data: dict[str, float] = {"Alice": 95.5, "Bob": 85.3}
```

This simplified syntax enhances readability and reduces verbosity.

## Specialized Annotations (`Sequence`, `Mapping`, `Iterable`, `Iterator`)

Python provides specialized annotations for greater flexibility:

### `Sequence`

- For any ordered collection supporting indexing:

```python
from typing import Sequence

def average(numbers: Sequence[float]) -> float:
    return sum(numbers) / len(numbers)
```

### `Mapping`

- For dictionary-like objects:

```python
from typing import Mapping

def get_user_age(users: Mapping[str, int], username: str) -> int:
    return users.get(username, 0)
```

### `Iterable` and `Iterator`

- For looping over items:

```python
from typing import Iterable, Iterator

def print_items(items: Iterable[str]) -> None:
    for item in items:
        print(item)


def generate_numbers(n: int) -> Iterator[int]:
    for i in range(n):
        yield i
```

Specialized annotations enable broader compatibility with various collection types.

## Defining Custom Generics with `TypeVar` and `Generic`

Custom generics allow functions and classes to handle various types flexibly:

### Using `TypeVar`

```python
from typing import TypeVar, List

T = TypeVar('T')

def first_item(items: List[T]) -> T:
    return items[0]

print(first_item([1, 2, 3]))  # returns int
print(first_item(["a", "b"]))  # returns str
```

### Generic Classes

```python
from typing import Generic

class Box(Generic[T]):
    def __init__(self, content: T):
        self.content = content

box_int = Box(123)
box_str = Box("hello")
```

Custom generics enhance code reusability and type safety.

## Using Constraints and Bounds with Generics

Generics can include constraints and bounds to restrict allowed types:

### Constraints

```python
U = TypeVar('U', int, float)

def add(a: U, b: U) -> U:
    return a + b

add(1, 2)      # valid
add(1.5, 2.5)  # valid
# add("a", "b")  # invalid, detected by type checker
```

### Bounds

```python
class Animal:
    def speak(self) -> str:
        return "..."

A = TypeVar('A', bound=Animal)

def animal_sound(animal: A) -> str:
    return animal.speak()

class Dog(Animal):
    def speak(self) -> str:
        return "Woof!"

print(animal_sound(Dog()))  # "Woof!"
```

Constraints and bounds improve specificity in generic type annotations, enhancing code clarity and correctness.
