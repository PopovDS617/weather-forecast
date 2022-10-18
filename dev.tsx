
 const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
};


<AnimatePresence mode="wait" initial={true}>
   <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay:0.1 }}
    exit: { opacity: 0, x: 0, y: 20 }
               >
    {children}
     </motion.div>
   
   
   
</AnimatePresence>
