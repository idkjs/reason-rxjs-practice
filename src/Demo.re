Js.log("Hello, BuckleScript and Reason!");
open RxJs;
let observable =
  Observable.make(observer => {
    open Observer;

    observer->next(1);
    observer->next(2);
    observer->next(3);

    Js.Global.setTimeout(
      () => {
        observer->next(4);
        observer->complete;
      },
      1000,
    )
    |> ignore;
    None;
  });

observable->Observable.subscribe(
  ~next=x => Js.log2("got value", x),
  ~error=err => Js.log2("something wrong occurred", err),
  ~complete=() => Js.log("done"),
  (),
)
|> ignore;