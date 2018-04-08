export default function (context) {
  console.log('[Middleware] Middleware is running')
  console.log(context.store)
  console.log(context)
}
