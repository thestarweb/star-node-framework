import 'reflect-metadata';

// const SIDE_ONLY_KET = Symbol('SIDE_ONLY');

// type Side = string|Side[];

// function flattening(side:Side): string[]{
//     if(typeof side === 'string'){
//         return [side];
//     }
//     const ret = [];
//     side.forEach((s) => ret.push(...flattening(s)))
//     return ret;
// }

// export function SideOnly(...side:Side[]): ClassDecorator|MethodDecorator{
//     const pSide = flattening(side)
//     return function (target,key){
//         const oldSide = Reflect.hasMetadata(SIDE_ONLY_KET, target, key)?Reflect.getMetadata(SIDE_ONLY_KET, target, key):pSide;
//         Reflect.defineMetadata(SIDE_ONLY_KET, pSide.find(), target, key);
//     }
// }

export function ServerOnly(): ClassDecorator | MethodDecorator {
	return () => {};
}
export function WebOnly(): ClassDecorator | MethodDecorator {
	return () => {};
}
