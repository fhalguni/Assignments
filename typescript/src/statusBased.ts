enum OrderStatus {
  pending,
  shipped,
  Delivered,
}

function statusBehaviour(choice: number): void {
  switch (choice) {
    case 1: {
      console.log("The status is: " + OrderStatus[OrderStatus.pending]);
      break;
    }
    case 2: {
      console.log("The status is: " + OrderStatus[OrderStatus.shipped]);
      break;
    }
    case 3: {
      console.log("The status is: " + OrderStatus[OrderStatus.Delivered]);
      break;
    }
    default: {
      break;
    }
  }
}

statusBehaviour(1);
statusBehaviour(2);
statusBehaviour(3);
