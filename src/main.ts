import './main-style.css';

import { EventManager } from './section-one/event-dispatch';
import {
    inlineCashingTest,
    inlineCashingTestByDeOptimize,
} from './section-one/inline-cashing';
import {
    excuteMicroMacroTask,
    questionMicroMacroTask,
} from './section-one/micro-macro-task';
import { solutionMicroMacroTask } from './section-one/solution';
import { mutationObserver } from './section-one/observer-api';
import { execIntersection } from './section-one/intersection-api';
import { execClosure } from './section-two/state';
import { debounce } from './section-two/debounce';

const eventExample = () => {
    const test1 = ({ detail: data }: CustomEvent) => {
        console.log('test1 : ', data);
    };
    EventManager.addEventLitener('event-test-1', test1);
    const test2 = ({ detail: data }: CustomEvent) => {
        console.log('test2 : ', data);
    };
    EventManager.addEventLitener('event-test-2', test2);
    // eventManager.removeEventListener('event-test-1', test1);

    EventManager.dispatchEvent('event-test-1', { data: '2' });
    EventManager.dispatchEvent('event-test-2', { data: '3' });
};

const inlineTest = () => {
    inlineCashingTest();
    inlineCashingTestByDeOptimize();
};

// debounce(() => console.log("debounce1")); //이건 함수만 리턴함. 실행하지 않음

const a = (d: string) => {
    console.log(d)
}

const debouncer = debounce(a)

debouncer(1)
debouncer(2)
debouncer(3) //3만 출력되는 이유: 앞의 1,2는 debounce내에 공유되는 timeout이 지워졌기때문

//참고: addEventListener에 사용됨.