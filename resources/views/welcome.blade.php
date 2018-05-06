@extends('layout')

@section('title', 'Home')

@section('content')

    @include('components/header', ['title' => 'Welcome'])
    
    @include('components/footer')
    
@stop