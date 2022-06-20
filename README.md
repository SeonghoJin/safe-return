# type-safe-return [![install size](https://packagephobia.com/badge?p=type-safe-return)](https://packagephobia.com/result?p=type-safe-return)
type-safe-return은 환경에 따라 `다른 값을 반환하는 함수`입니다.<br> 애플리케이션은 여러 환경에서 빌드가 됩니다. 보통 3가지 환경(배포, 테스트, 개발)이 존재합니다. <br>
배포환경에서의 애플리케이션은 `안정적`이고 `약간의 버그를 감수`하더라도 애플리케이션이 돌아가도록 해야하지만 개발환경에서는 다릅니다. <br> 
개발환경은 빠른 속도로 개발할 필요가 있고 기존에 있는 `에러들을 캐치`해 배포환경에서의 애플리케이션이 정상적으로 작동하도록 해야합니다. <br>
하지만 `배포환경만을 고려한 애플리케이션`은 개발환경에서 에러를 캐치하기 어렵게 만듭니다. <br>
따라서, 환경변수에 따라 다른 값을 반환하도록 하여 개발환경에서는 `에러를 더욱 쉽게 확인`할 수 있도록 하고 배포환경에서는 안정적으로 개발할 수 있는 함수인 type-safe-return 함수가 필요합니다. 

## Installation
```shell
npm i type-safe-return
```

## Example

```typescript

import safe from 'type-safe-return';


function sum(a: number, b: number){
  
  if(typeof a !== 'number'){
    return safe<number>({
      production: 0,
      development: () => {
        throw new Error("sum error");
      }
    })
  }
  
  if(typeof b !== 'number'){
    return safe<number>({
      production: 0,
      development: () => {
        throw new Error("sum error");
      }
    })
  }
  
  return a + b;
}
```

위의 sum함수의 예는 safe-return을 설명하는 것에 적절하지 않습니다. 다른 타입이 들어오는 것은 `명백한 에러이고, 예측할 수 있는 에러`입니다. 이는 프로덕션환경에서 충분히 핸들링 되도록 구현할 수 있습니다. 
예를 들면 `사용자에게 에러 표시`를 하여 다른 값을 받도록 할 수 있습니다. 하지만 위의 예제로 설명하겠습니다 <br>

코드에 대한 설명으로 넘어와서, a, b 변수가 들어왔을 때 number 타입이 아닐 경우 production 환경에서는 0을 반환하도록 하고, 개발환경에서는 에러를 던지도록 했습니다. <br>
위와 같은 예제는 프로덕션환경에서 안정적이지만, 개발환경에서는 에러를 일으킵니다. 개발환경에서 에러가 일어난 것을 확인한 개발자는 이 에러에 대해서 즉각적으로 코드를 수정해야합니다. <br> 
이는 코드의 에러에 대해 즉각적인 피드백을 줄 수 있다는 의미입니다. <br>

이 safe함수는 `모든 에러에 적용`하는 것은 좋지 않습니다. safe함수는 `실험적인 곳`에 사용되면 좋습니다. <br>
어떤 에러가 일어날지 `모를 때`, 에러를 처리하기 `버거울 때`, 하지만 기능을 `지속적으로 구현해야할 때` 사용되면 좋습니다. <br>
production 환경에서, 예기치못한 에러가 일어났을 때 `충분히 에러를 대체할 수 있는 안정적인 값을 반환`하도록 하고, 개발환경에서는 에러를 발생시켜 `빠르게 피드백 할 수 있도록` 하면 매우 좋을 것입니다. 
