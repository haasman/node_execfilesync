import logging
import asyncio
logging.basicConfig(filename="test.log")

def save_to_file():
    import time
    t = time.time()
    time=int(t)
    logging.warning(time)
    return time

async def post():
    test1 = save_to_file()
    await asyncio.sleep(5)
    test2 = save_to_file()
    print(test1, test2)

asyncio.run(post())