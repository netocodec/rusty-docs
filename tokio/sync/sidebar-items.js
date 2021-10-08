initSidebarItems({"enum":[["SetError","Errors that can be returned from `OnceCell::set`."],["TryAcquireError","Error returned from the `Semaphore::try_acquire` function."]],"mod":[["broadcast","A multi-producer, multi-consumer broadcast queue. Each sent value is seen by all consumers."],["futures","Named future types."],["mpsc","A multi-producer, single-consumer queue for sending values between asynchronous tasks."],["oneshot","A one-shot channel is used for sending a single message between asynchronous tasks. The [`channel`] function is used to create a [`Sender`] and [`Receiver`] handle pair that form the channel."],["watch","A single-producer, multi-consumer channel that only retains the last sent value."]],"struct":[["AcquireError","Error returned from the `Semaphore::acquire` function."],["Barrier","A barrier enables multiple tasks to synchronize the beginning of some computation."],["BarrierWaitResult","A `BarrierWaitResult` is returned by `wait` when all tasks in the `Barrier` have rendezvoused."],["MappedMutexGuard","A handle to a held `Mutex` that has had a function applied to it via `MutexGuard::map`."],["Mutex","An asynchronous `Mutex`-like type."],["MutexGuard","A handle to a held `Mutex`. The guard can be held across any `.await` point as it is [`Send`]."],["Notify","Notify a single task to wake up."],["OnceCell","A thread-safe cell that can be written to only once."],["OwnedMutexGuard","An owned handle to a held `Mutex`."],["OwnedRwLockMappedWriteGuard","Owned RAII structure used to release the exclusive write access of a lock when dropped."],["OwnedRwLockReadGuard","Owned RAII structure used to release the shared read access of a lock when dropped."],["OwnedRwLockWriteGuard","Owned RAII structure used to release the exclusive write access of a lock when dropped."],["OwnedSemaphorePermit","An owned permit from the semaphore."],["RwLock","An asynchronous reader-writer lock."],["RwLockMappedWriteGuard","RAII structure used to release the exclusive write access of a lock when dropped."],["RwLockReadGuard","RAII structure used to release the shared read access of a lock when dropped."],["RwLockWriteGuard","RAII structure used to release the exclusive write access of a lock when dropped."],["Semaphore","Counting semaphore performing asynchronous permit acquisition."],["SemaphorePermit","A permit from the semaphore."],["TryLockError","Error returned from the `Mutex::try_lock`, `RwLock::try_read` and `RwLock::try_write` functions."]]});