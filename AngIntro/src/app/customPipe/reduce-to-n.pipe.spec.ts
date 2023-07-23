import { ReduceToNPipe } from './reduce-to-n.pipe';

describe('ReduceToNPipe', () => {
  it('create an instance', () => {
    const pipe = new ReduceToNPipe();
    expect(pipe).toBeTruthy();
  });
});
