# Apollo Server Subscriptions Example

## Setup

```bash
./ops setup
```

## Develop

```bash
./ops start
```

Visit: http://localhost:4000 and then run the query below.
You should get a new message every second 🍻

```graphql
subscription {
  count
}
```

## Resources

- [Apollo GraphQL Subscriptions](https://www.apollographql.com/docs/apollo-server/v2/features/subscriptions.html#Subscriptions-Example)
- [apollo2-subscriptions-how-to](https://github.com/daniele-zurico/apollo2-subscriptions-how-to)
- [GraphQL-Chat](https://github.com/abhiaiyer91/GraphQL-Chat)
- [graphql-subscriptions](https://github.com/apollographql/graphql-subscriptions)
- [subscriptions-transport-ws](https://github.com/apollographql/subscriptions-transport-ws/tree/master/docs)
- [Apollo Local State Subscriptions](https://github.com/apollographql/apollo-link-state/issues/138)
- [Local State Subscription workaround](https://github.com/apollographql/apollo-link-state/issues/137)
