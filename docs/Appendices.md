# Appendices

## Appendix A: Type Annotation Quick Reference

| Annotation                        | Description                         | Example                      |
|-----------------------------------|-------------------------------------|------------------------------|
| `int`, `str`, `float`, `bool`     | Basic built-in types                | `age: int = 25`              |
| `List[T]`, `list[T]`              | List containing items of type `T`   | `scores: list[int]`          |
| `Tuple[T, ...]`                   | Tuple with specified item types     | `coords: tuple[float, float]`|
| `Dict[K, V]`, `dict[K, V]`        | Dictionary with keys `K`, values `V`| `user_data: dict[str, int]`  |
| `Set[T]`, `set[T]`                | Set containing items of type `T`    | `tags: set[str]`             |
| `Optional[T]`                     | Type `T` or `None`                  | `name: Optional[str]`        |
| `Union[T1, T2]` or `T1 | T2`      | Either type `T1` or `T2`            | `value: int | str`           |
| `Callable[[Args], ReturnType]`    | Function types                      | `adder: Callable[[int, int], int]` |
| `Literal["value"]`                | Specific literal values             | `mode: Literal["auto", "manual"]` |
| `Annotated[T, metadata]`          | Type `T` with additional metadata   | `UserID = Annotated[int, "primary key"]` |
| `NewType('Name', T)`              | New distinct type based on type `T` | `UserId = NewType('UserId', int)`|
| `Protocol`                        | Structural typing protocol          | `class Speaker(Protocol): ...`|

## Appendix B: Glossary of Typing Terms and Concepts

| Term                 | Definition                                                                 |
|----------------------|----------------------------------------------------------------------------|
| **Annotation**       | Explicit type declaration for variables, functions, or classes.            |
| **Duck Typing**      | Determining an object's suitability based on presence of methods/attributes|
| **Generics**         | Type annotations parameterized by type variables.                          |
| **Literal Types**    | Types representing specific literal values.                                |
| **Protocol**         | Interface defined by structural compatibility, rather than explicit inheritance.|
| **Stub Files**       | Files (`.pyi`) containing type annotations without implementations.        |
| **Type Alias**       | Simplified or descriptive alias for complex type annotations.              |
| **Type Checking**    | Verification of type consistency either statically or at runtime.          |
| **Type Narrowing**   | Refining variable types within specific control-flow branches.             |
| **Variance**         | Rules describing subtype relationships between generic types (covariant, contravariant).|
| **Static Typing**    | Types checked before execution (compile-time).                             |
| **Dynamic Typing**   | Types determined and checked during execution (runtime).                   |
| **Covariance**       | Generic type that accepts subtypes as substitutes for its type parameter.  |
| **Contravariance**   | Generic type that accepts supertypes as substitutes for its type parameter.|
| **Invariant**        | Generic type that requires exact type matches for its type parameters.     |
